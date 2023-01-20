import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private"
import AzureADProvider from "@auth/core/providers/azure-ad";
import { 
  AZURE_AD_CLIENT_ID,
  AZURE_AD_CLIENT_SECRET,
  AZURE_AD_TENANT_ID
} from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    AzureADProvider({
      clientId: AZURE_AD_CLIENT_ID,
      clientSecret: AZURE_AD_CLIENT_SECRET,
      tenantId: AZURE_AD_TENANT_ID,
      // issuer: `https://login.microsoftonline.com/${AZURE_AD_TENANT_ID}/v2.0`,
      authorization: { params: { scope: "openid profile user.Read email" } },
    })
  ],
})
