import requests
from urllib3.exceptions import InsecureRequestWarning
from flask import Flask, request, jsonify

print('------- SERVER LISTENING ON PORT 5000 -------')

app = Flask(__name__)

requests.packages.urllib3.disable_warnings(category=InsecureRequestWarning)

api_url = 'https://192.168.1.1/api/v1/user'
username = 'admin'
password = 'senai127'

@app.route('/api/user', methods=['POST'])
def createUser():
    fullNameData = request.form.get('full-name') 
    usernameData = request.form.get('username') 
    passwordData = request.form.get('password') 
    expiresData = request.form.get('expires') 
    expiresVisualData = request.form.get('expires-visual') 

    # Dados a serem enviados no POST no formato JSON
    data = {
       "authorizedkeys": "",
       "cert": [],
       "descr": f"Nome: {fullNameData} - Expira em: {expiresVisualData}",
       "disabled": "false",
       "expires": expiresData,
       "ipsecpsk": "",
       "password": passwordData,
       "priv": ["user-services-captiveportal-login"],
       "username": usernameData
    }

    response = requests.post(api_url, auth=(username, password), json=data, verify=False)

    if response.status_code == 200:
        return jsonify({'message': f'POST request successful! {response.status_code}'})
    else:
        return jsonify({'message': f'Error making POST request: {response.status_code}'})

# Executar o servidor Flask
if __name__ == '__main__':
    app.run()
