FROM "node"
WORKDIR /opt/reactions
COPY package*.json .
RUN npm i
# Se asigna una variable de entorno para que el computador sepa que puerto utilizar
# ENV PORT=3001
EXPOSE "3000"
CMD ["sleep", "infinity"]