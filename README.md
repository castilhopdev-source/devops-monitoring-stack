# 📊 DevOps Monitoring Stack

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Projeto de observabilidade...

Descrição: 
Este projeto demonstra a implementação de um ambiente de observabilidade containerizado, onde uma aplicação Node.js expõe métricas customizadas consumidas pelo Prometheus e visualizadas em dashboards no Grafana. 
A solução foi estruturada utilizando Docker e Docker Compose, simulando um cenário real de monitoramento de aplicações e aplicando conceitos fundamentais de Observabilidade e SRE.


## 🏗️ Arquitetura

![Arquitetura do Projeto](docs/images/architecture.png)

## 🧠 Skills Demonstradas

Este projeto demonstra conhecimentos práticos em:

- 🐳 Containerização de aplicações utilizando Docker
- 📦 Orquestração de múltiplos serviços com Docker Compose
- 📊 Exposição de métricas customizadas com Prometheus Client
- 🔄 Monitoramento baseado no modelo Pull (Prometheus scraping)
- 📈 Criação de dashboards e visualização de métricas no Grafana
- 🛠️ Configuração de comunicação entre containers via rede interna
- 🚦 Conceitos iniciais de SRE e observabilidade

## 🎯 Objetivo Técnico

Simular um ambiente real de observabilidade onde uma aplicação expõe métricas customizadas que são coletadas via scraping pelo Prometheus e posteriormente analisadas em dashboards no Grafana.

