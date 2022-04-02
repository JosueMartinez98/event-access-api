import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apiPrefix = process.env.API_PREFIX;
  const config = new DocumentBuilder()
    .setTitle('Events Access API')
    .setDescription('The API to manage the data about the UI of Events Access Application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${apiPrefix}/docs`, app, document);
  app.setGlobalPrefix(apiPrefix);
  await app.listen(process.env.APP_PORT);
}
bootstrap();
