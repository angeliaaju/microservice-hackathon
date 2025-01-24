# Microservice Hackathon Project

This project demonstrates a lightweight microservice architecture using Docker and Docker Compose.

## Services
1. **API Gateway**: Routes requests to other services.
2. **User Management**: Manages user data.
3. **Data Storage**: Stores and retrieves data.
4. **Prometheus**: Monitors service health.
5. **Grafana**: Visualizes metrics from Prometheus.

## How to Run
1. Clone the repository.
2. Run `docker-compose up --build` to start all services.
3. Access the services:
   - API Gateway: `http://localhost:3000/users`
   - Prometheus: `http://localhost:9090`
   - Grafana: `http://localhost:3001` (default login: admin/admin)