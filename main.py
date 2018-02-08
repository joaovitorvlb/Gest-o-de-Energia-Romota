# -*- coding: utf-8 -*-

from flask import Flask, render_template, jsonify, flash, redirect, request, session, abort, url_for
from flask_sqlalchemy import SQLAlchemy
import os
import __future__ 
import socket
import requests
import threading
import netifaces
import time
import sqlite_
import sistema
import loop
import signal
import sys
import psutil
import mpu6050
import smbus
import pca9685

i2c = smbus.SMBus(2)

pwm = pca9685.Pca9685(i2c=i2c, freq=50)

mpu = mpu6050.Mpu6050(i2c=i2c,adr=0x68)

pot = 0
bat = 0
cont = 0

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
db = SQLAlchemy(app)

class User(db.Model):
    """ Create user table"""
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    password = db.Column(db.String(80))

    def __init__(self, username, password):
        self.username = username
        self.password = password



@app.route('/', methods=['GET', 'POST'])
def home():                                      #Função que é chamada para fazer o conrole de seção com 1 id para cada seção
    if not session.get('logged_in'):             #verifica se for true inicia seção senao finaliza
        return render_template('login.html')
    else:
        return render_template('index.html')
        print get_online_users()


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':                  #Verifica se é requisição GET
        return render_template('login.html')
    else:
        name = request.form['username']
        passw = request.form['password']
        try:
            data = User.query.filter_by(username=name, password=passw).first()  #verifica n banco de dados se existe usuário
            if data is not None:
                session['logged_in'] = True            #Flag da seção se torna true para autenticado geralmente inicia none
                return redirect(url_for('home'))       #se tiver usuario cadastrado chama home e verifica flag de login
            else:
                return render_template('login.html')   # se o usuaruio não exixtir retorna pagina login

        except:        
            return render_template('login.html')        # Se alguma exceção for levantada nao finaliza e retorna para login

@app.route('/registro', methods=['GET', 'POST'])
def register():
    """Register Form"""
    if request.method == 'POST':        #verifica se o formulario fez ação POST
        new_user = User(username=request.form['username'], password=request.form['password'])  #pega valores e prepara para injetar no bd
        db.session.add(new_user)               #Adiciona na fina de inserção
        db.session.commit()                    #Dispara a inserção de dados no bd
        return render_template('login.html')   #E retorna login para lgar no usuário cadastrado
    return render_template('register.html')    # se o if não encontrar POST retorna pagina de registro

@app.route("/logout")
def logout():
    """Logout Form"""
    session['logged_in'] = False      #se logout for chamado pega a flag e atribui false
    return redirect(url_for('home'))  #Chama nome que vai verificar que a seção foi encerrada


@app.route('/update')
def update():
    buf = []
    fut[0] = read_gyro_x()
    fut[1] = read_gyro_y()
    fut[2] = read_gyro_z()
    return jsonify(buf)



@app.route('/graficos/<valor>')
def graficos(valor):
    valores = sqlite_.retorna_dados_coleta(valor)
    return jsonify(valores)

@app.route('/media/<valor>')
def media(valor):
    valores = sqlite_.retorna_dados_media(valor)
    return jsonify(valores)

@app.route('/update_temperatura')
def temperatura():
    return ('OK', 200)

@app.route('/update_potenciometro')
def potenciometro():
    return ('OK', 200)

@app.route('/sensores1/<vl1>/<vl2>/<vl3>/<vl4>/<vl5>/<vl6>')
def oi(vl1,vl2,vl3,vl4,vl5,vl6):
    sqlite_.cria_tabela_coleta()
    sqlite_.adiciona_dado_coleta(vl3,vl4,vl5,vl6)
    return ('OK', 200)

@app.route('/t_cpu')
def t_cpu():
    i = psutil.cpu_percent()
    return jsonify(i)

@app.route('/p_mem')
def p_mem():
    meminfo = sistema.meminfo()
    est1 = ('{}'.format(meminfo['MemTotal']))
    est1 = (est1.strip('kB'))
    est1 = long(est1)
    est2 = ('{}'.format(meminfo['MemFree']))
    est2 = (est2.strip('kB'))
    est2 = long(est2)
    uso = ((est2 *100) / est1)
    return jsonify(uso)


@app.route('/p_disc')
def partirion():
    disc = sistema.partition()
    part_t = long(disc[0][2])
    part_1 = long(disc[1][2])
    part_2 = long(disc[2][2])
    part = part_t / (part_1 + part_2)
    return jsonify(part)

def signal_handler(signal, frame):
    for process in psutil.process_iter():                #varre lista de processo da maquina
        if process.cmdline() == ['python', 'main.py']:   #se encontrar o processo
            print ' '
            print 'Processo: ' + str(process.pid)
            print 'Processo encerrado!'
            process.terminate()                          #pega o processo e termina

signal.signal(signal.SIGINT, signal_handler)             #gera calback por KI caso Ctrl+C

if __name__ == "__main__":
    loop = loop.Loop()
    loop.start()
    local_ip = sistema.guet_ip()                #invoca funcao para retornar o IP local 
    db.create_all()                             #verifica o modelo de tabela e cria o bd
    app.secret_key = "123"                      #inicia a thread
    app.run(host=local_ip)                      #loop dp flask


