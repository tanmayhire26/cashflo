import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const apiConfig = new DocumentBuilder()
  .setTitle('Example')
  .setDescription('Cash-flo APIs examples')
  .setVersion('1.0.0')
  .addTag('')
  .build();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Content-Type, Accept',
  credentials: true,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  app.enableCors(corsOptions);

  const document = SwaggerModule.createDocument(app, apiConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(7007);
}

bootstrap();