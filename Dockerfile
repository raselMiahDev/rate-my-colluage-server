FROM baseImage

WORKDIR /app
COPY /app /app
RUN pnpm install
RUN pnpm build
CMD [ "executable" ]
EXPOSE 4000