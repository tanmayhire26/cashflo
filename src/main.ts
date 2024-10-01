import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const config = new DocumentBuilder()
    .setTitle('Example')
    .setDescription('Cash-flo APIs examples')
    .setVersion('1.0.0')
    .addTag('')
    .build();

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(7007);
}
bootstrap();
