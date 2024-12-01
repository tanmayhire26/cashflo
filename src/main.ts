import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const DEFAULT_PORT = 7007;
const DEFAULT_ORIGIN = 'http://localhost:3000';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const config = new DocumentBuilder()
    .setTitle('Example')
    .setDescription('Cash-flo APIs examples')
    .setVersion('1.0.0')
    .addTag('')
    .build();

  app.enableCors({
    origin: DEFAULT_ORIGIN,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(DEFAULT_PORT);
}

bootstrap();