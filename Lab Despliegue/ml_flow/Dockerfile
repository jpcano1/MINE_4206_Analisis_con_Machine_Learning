FROM python:3.8-slim

ENV APP_DIR /app
WORKDIR $APP_DIR

ADD deployment.ipynb $APP_DIR
ADD training.ipynb $APP_DIR
ADD requirements.txt $APP_DIR

ENV PYTHONUNBUFFERED 1
ENV LANG C.UTF-8
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt full-upgrade -y && \
        apt-get install -y --no-install-recommends \
        tzdata \
        wget curl unzip\
        vim \
        git \
        && \
        apt-get clean && \
        rm -rf /var/lib/apt/lists/*

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip -q awscliv2.zip
RUN ./aws/install

RUN pip install -q --upgrade pip
RUN pip install -r requirements.txt