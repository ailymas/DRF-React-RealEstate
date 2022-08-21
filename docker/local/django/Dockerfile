FROM python:3.9.11-slim-buster
ENV APP_HOME=/app 
RUN mkdir $APP_HOME
RUN mkdir $APP_HOME/staticfiles
WORKDIR $APP_HOME

ENV PYTHONDONTWRITEBYTECODE 1

ENV PYTHONUNBUFFERED 1

RUN apt-get update \
  && apt-get install -y build-essential \ 
  && apt-get install -y libpq-dev \
  && apt-get install -y gettext \
  && apt-get -y install netcat gcc postgresql \
  && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
  && rm -rf /var/lib/apt/lists/*
#RUN apt-get update \ 
#The build-essentials packages  necessary for compiling software. They include the GNU debugger
#&& apt-get install -y build_essential \ 
#header files for libpq5 (PostgreSQL library)
#&& apt-get install -y libpq_dev \
#gettext is an internationalization and localization (i18n and l10n) system commonly used for writing multilingual programs on Unix-like computer operating systems
#&& apt-get install -y gettext \
#docker postgres services 
#&& apt-get install -y netcat gcc postgresql \
#Running the command apt-get purge -y <name of program> removes the program and its dependencies.
#&& apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
#&& rm -rf /var/lib/apt/lists/*

RUN python -m pip install --upgrade pip
COPY ./requirements.txt /app/requirements.txt
RUN pip3 install -r requirements.txt 
COPY ./docker/local/django/entrypoints /entrypoints
#converts any windows lines index to unix lines index 
RUN sed -i 's/\r$//g' /entrypoints
RUN chmod +x /entrypoints
COPY ./docker/local/django/start /start
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start

#ENTRYPOINT. Default parameters that cannot be overridden when Docker Containers run with CLI parameters.
ENTRYPOINT [ "/entrypoints"]




