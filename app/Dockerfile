# pull official base image
FROM python:3.10.9

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# install psycopg2 dependencies
# RUN apt update && apk add postgresql-dev gcc python3-dev musl-dev
# RUN apt-get update && apt-get install netcat -y

# copy project
COPY . .

ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]