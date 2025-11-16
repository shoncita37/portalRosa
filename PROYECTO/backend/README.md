📌 README — Backend PortalRosa
🚀 Requisitos Previos

Antes de partir, tenís que tener instalado:

Python 3.12+

Poetry
Instalar:

pip install poetry

Node.js 20.x (si usas Prisma)

NVM recomendado

nvm install 20
nvm use 20

Supabase ya te entrega tu conexión a Postgres.

📁 Estructura del Proyecto

backend/
 ├── app/
 │   ├── main.py
 │   ├── graphql/
 │   ├── prisma/
 │   └── ...
 ├── prisma/
 │   ├── schema.prisma
 │   └── .env
 ├── pyproject.toml
 ├── poetry.lock
 ├── .env
 └── README.md

🔧 Configuración del Entorno
1️⃣ Crear el entorno virtual (Poetry lo maneja solo)

poetry shell

Si no existe venv, Poetry lo crea automáticamente.

2️⃣ Instalar dependencias del proyecto

poetry install


Esto lee tu pyproject.toml y baja solo lo necesario:

FastAPI

Strawberry GraphQL

Prisma

python-dotenv

Uvicorn

etc.

3️⃣ Configurar el archivo .env

Ejemplo: DATABASE_URL="postgresql://usuario:clave@host.supabase.co:5432/postgres"


La URL te la da Supabase tal cual.

🔌 Prisma (Base de Datos)
4️⃣ Inicializar Prisma (si no lo has hecho antes)

prisma init

Esto crea la carpeta /prisma.

5️⃣ Sincronizar el schema con la BD de Supabase
prisma db pull

Esto lee las tablas reales y genera tus modelos Prisma.

6️⃣ Generar el cliente de Prisma
prisma generate

Esto deja listo el client Python (from prisma import Prisma).

🏃 Levantar el Servidor
7️⃣ Ejecutar FastAPI + GraphQL

Desde dentro del env de Poetry (poetry shell):

uvicorn app.main:app --reload

El backend queda corriendo en:
http://localhost:8000
http://localhost:8000/docs         # Swagger REST
http://localhost:8000/graphql      # UI GraphQL (Strawberry)

📦 Comandos Útiles
Ejecutar cualquier comando dentro del entorno de Poetry:

poetry run <comando>

Ejemplo:

poetry run uvicorn app.main:app --reload
poetry run prisma db pull

Salir del entorno Poetry:
exit

🧹 Limpiar el entorno completo
poetry env remove python
poetry install

❤️ Notas Importantes

Poetry controla las dependencias, no uses pip install.

Prisma necesita Node 20, no versiones superiores.

Siempre correr prisma generate cuando modifiques el schema.

Strawberry GraphQL funciona impecable con FastAPI.
