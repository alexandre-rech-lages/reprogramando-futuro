using Resend;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddHttpClient();
builder.Services.AddCors(options =>
    options.AddDefaultPolicy(policy =>
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

var apiKey = Environment.GetEnvironmentVariable("RESEND_API_KEY") ?? 
    throw new Exception("RESEND_API_KEY environment variable is required");    

app.UseCors();
app.UseHttpsRedirection();

app.MapPost("/api/enrollment", async (EnrollmentRequest request, IHttpClientFactory httpClientFactory) =>
{
    var client = httpClientFactory.CreateClient();    

    var payload = new
            {
                nome_aluno = request.StudentName,
                idade = request.Age?.ToString() ?? "",
                nome_responsavel = request.GuardianName,
                email = request.Email,
                telefone = request.Phone,
                cidade = request.City,
                modalidade = request.Modality,
                data_inscricao = DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss")
            };   

    var response = await client.PostAsJsonAsync("https://sheetdb.io/api/v1/v86z0sv7xbqle", payload);

    if (!response.IsSuccessStatusCode)
        return Results.Problem("Erro ao gravar os dados. Tente novamente.");


    IResend resend = ResendClient.Create( "re_NzQv4CvF_69H9rQKe1VSkkyKctwAD9Qa5" );

    var resp1 = await resend.EmailSendAsync( new EmailMessage()
    {
        From = "onboarding@resend.dev",
        To = "rech@academiadoprogramador.net",
        Subject = "Reprogramando Futuro - Nova Inscrição",
        HtmlBody = $"<p>Nova inscrição recebida.</p><ul>" +
               $"<li><strong>Aluno:</strong> {request.StudentName}</li>" +
               $"<li><strong>Responsável:</strong> {request.GuardianName}</li>" +
               $"<li><strong>Email:</strong> {request.Email}</li>" +
               $"<li><strong>Telefone:</strong> {request.Phone}</li>" +
               $"<li><strong>Cidade:</strong> {request.City}</li>" +
               $"<li><strong>Modalidade:</strong> {request.Modality}</li>" +
               $"</ul>"
    });

    Console.WriteLine($"Email para equipe: Status {resp1.Content}");

    var resp2 = await resend.EmailSendAsync( new EmailMessage()
    {
        From = "rech@academiadoprogramador.net",
        To = new[] { request.Email },
        Subject = "Reprogramando Futuro - Confirmação de Inscrição",
       
        Template = new EmailMessageTemplate()
        {       
            TemplateId = Guid.Parse("717eaa77-5450-47d4-9ed1-0b5a1c7af415"),                 
            Variables = new Dictionary<string, object>{{ "NOME_RESPONSAVEL", request.GuardianName }}
        }
    });  

    //Console.WriteLine($"Email para equipe: Status {resp2.Content}");  

    return Results.Ok(new { message = "Inscrição realizada com sucesso!" });
})
.WithName("CreateEnrollment");

app.Run();

record EnrollmentRequest(
    string StudentName,
    int? Age,
    string GuardianName,
    string Email,
    string Phone,
    string City,
    string Modality);
