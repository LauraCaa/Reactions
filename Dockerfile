FROM "node"
WORKDIR /opt/reactions
COPY .package*.json .
RUN npm i
EXPOSE "3000"
CMD ["sleep", "infinity"]