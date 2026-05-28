@description('Name prefix for all resources')
param projectName string = 'reprogramando-futuro'

@description('Environment name')
@allowed(['dev', 'staging', 'prod'])
param environment string = 'dev'

@description('Azure region for deployment')
param location string = resourceGroup().location

var resourcePrefix = '${projectName}-${environment}'

// App Service Plan
resource appServicePlan 'Microsoft.Web/serverfarms@2023-01-01' = {
  name: '${resourcePrefix}-plan'
  location: location
  sku: {
    name: environment == 'prod' ? 'P1v3' : 'B1'
    tier: environment == 'prod' ? 'PremiumV3' : 'Basic'
  }
  properties: {
    reserved: false
  }
}

// API App Service (ASP.NET Core)
resource apiApp 'Microsoft.Web/sites@2023-01-01' = {
  name: '${resourcePrefix}-api'
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      netFrameworkVersion: 'v9.0'
      appSettings: [
        {
          name: 'ASPNETCORE_ENVIRONMENT'
          value: environment == 'prod' ? 'Production' : 'Development'
        }
      ]
    }
    httpsOnly: true
  }
}

// Static Web App (Angular)
resource staticWebApp 'Microsoft.Web/staticSites@2023-01-01' = {
  name: '${resourcePrefix}-web'
  location: location
  sku: {
    name: environment == 'prod' ? 'Standard' : 'Free'
    tier: environment == 'prod' ? 'Standard' : 'Free'
  }
  properties: {
    buildProperties: {
      appLocation: 'apps/web'
      outputLocation: 'dist/apps/web/browser'
    }
  }
}

// SQL Database
resource sqlServer 'Microsoft.Sql/servers@2023-05-01-preview' = {
  name: '${resourcePrefix}-sql'
  location: location
  properties: {
    administratorLogin: 'sqladmin'
    administratorLoginPassword: 'CHANGE_ME_IN_DEPLOYMENT'
  }
}

resource sqlDatabase 'Microsoft.Sql/servers/databases@2023-05-01-preview' = {
  parent: sqlServer
  name: '${projectName}-db'
  location: location
  sku: {
    name: environment == 'prod' ? 'S2' : 'Basic'
    tier: environment == 'prod' ? 'Standard' : 'Basic'
  }
}

output apiAppUrl string = 'https://${apiApp.properties.defaultHostName}'
output webAppUrl string = 'https://${staticWebApp.properties.defaultHostname}'
