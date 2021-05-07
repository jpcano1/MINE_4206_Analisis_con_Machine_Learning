FROM python:3.8

ENV APP_DIR /app
WORKDIR $APP_DIR

ADD src $APP_DIR/src
ADD requirements/dev.txt $APP_DIR
ADD requirements/prod.txt $APP_DIR
ADD wsgi.py $APP_DIR

ENV PYTHONUNBUFFERED 1
ENV LANG C.UTF-8
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt full-upgrade -y && \
        apt-get install -y --no-install-recommends \
        vim \
        git \
        && \
        apt-get clean && \
        rm -rf /var/lib/apt/lists/*

RUN pip install -q --upgrade pip
RUN pip install -q -r prod.txt
RUN pip install -q unittest2

CMD gunicorn --bind 0.0.0.0:5000 wsgi:app