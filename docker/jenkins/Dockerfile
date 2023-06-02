FROM jenkins/jenkins:2.402-jdk17

USER root

RUN apt-get update
RUN apt-get install -y apt-transport-https \
                    ca-certificates \
                    curl \
                    gnupg \
                    lsb-release
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
RUN echo "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list
RUN apt-get update
RUN apt-get install -y docker-ce-cli
RUN rm -rf /var/lib/apt/lists/*

ADD plugins.txt .
RUN jenkins-plugin-cli -f plugins.txt

ADD ssh-config .

RUN groupadd docker
RUN usermod -aG docker jenkins

COPY start.sh .
RUN chmod +x start.sh
RUN mkdir /deploy

RUN chown jenkins:jenkins /deploy
USER jenkins

ENTRYPOINT [ "/bin/sh", "/start.sh" ]
