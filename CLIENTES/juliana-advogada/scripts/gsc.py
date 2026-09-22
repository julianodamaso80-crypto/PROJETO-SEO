"""Acesso ao Google Search Console do ddclaw.com.br via conta de servico."""
import sys
from google.oauth2 import service_account
from googleapiclient.discovery import build

CRED = r"C:\Users\damas\.secrets\ddclaw\gsc-service-account.json"
SITE = "https://www.ddclaw.com.br/"
SCOPES = ["https://www.googleapis.com/auth/webmasters"]


def servico():
    creds = service_account.Credentials.from_service_account_file(CRED, scopes=SCOPES)
    return build("searchconsole", "v1", credentials=creds, cache_discovery=False)


def listar_sites(sc):
    print("=== PROPRIEDADES VISIVEIS PARA A CONTA DE SERVICO ===")
    resp = sc.sites().list().execute()
    entradas = resp.get("siteEntry", [])
    if not entradas:
        print("  (nenhuma)")
    for s in entradas:
        print(f"  {s['siteUrl']}  [{s['permissionLevel']}]")
    return entradas


def listar_sitemaps(sc):
    print("\n=== SITEMAPS ===")
    resp = sc.sitemaps().list(siteUrl=SITE).execute()
    for sm in resp.get("sitemap", []):
        print(f"  path      : {sm.get('path')}")
        print(f"  tipo      : {sm.get('type')}")
        print(f"  baixado   : {sm.get('lastDownloaded', 'NUNCA')}")
        print(f"  erros     : {sm.get('errors', 0)} | avisos: {sm.get('warnings', 0)}")
        print(f"  pendente  : {sm.get('isPending')}")
        for c in sm.get("contents", []):
            print(f"  conteudo  : {c.get('type')} -> {c.get('submitted')} enviadas, {c.get('indexed', '?')} indexadas")
        print("  ---")


if __name__ == "__main__":
    sc = servico()
    if not listar_sites(sc):
        sys.exit("Conta de servico ainda sem acesso a nenhuma propriedade.")
    listar_sitemaps(sc)
