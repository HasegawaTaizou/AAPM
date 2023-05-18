import requests
from urllib3.exceptions import InsecureRequestWarning
from flask import Flask, request

print('Servidor rodando na porta 5000')

app = Flask(__name__)

requests.packages.urllib3.disable_warnings(category=InsecureRequestWarning)

api_url = 'https://192.168.1.1/api/v1/user'
username = 'admin'
password = 'senai127'

@app.route('/api/exemplo', methods=['POST'])
def exemplo():
    usernameData = request.form.get('username')  # Obtém o valor do parâmetro 'variavel' enviado na solicitação POST
    passwordData = request.form.get('password')  # Obtém o valor do parâmetro 'variavel' enviado na solicitação POST
    expiresData = request.form.get('expires')  # Obtém o valor do parâmetro 'variavel' enviado na solicitação POST

    # Dados a serem enviados no POST no formato JSON
    data = {
       "authorizedkeys": "",
       "cert": [],
       "descr": "",
       "disabled": "false",
       "expires": expiresData,
       "ipsecpsk": "",
       "password": passwordData,
       "priv": [],
       "username": usernameData
    }

    response = requests.post(api_url, auth=(username, password), json=data, verify=False)

    if response.status_code == 200:
        # Requisição POST bem-sucedida
        print('POST request successful')
    else:
        # Tratar erros na requisição POST
        print('Error making POST request:', response.status_code)

# Executar o servidor Flask
if __name__ == '__main__':
    app.run()
