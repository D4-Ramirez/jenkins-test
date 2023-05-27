FROM jenkins/jenkins:2.402-alpine-jdk17

ADD plugins.txt .
RUN jenkins-plugin-cli -f plugins.txt

ADD ssh-config .

USER root
ADD start.sh .
RUN mkdir /deploy
RUN chown jenkins:jenkins /deploy
USER jenkins

ENTRYPOINT [ "/start.sh" ]
