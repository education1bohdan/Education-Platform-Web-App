import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { METADATA_AUTHORIZED_KEY } from '@core/core-module.config';

import * as packageJson from '../package.json';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle(packageJson.name)
    .setVersion(packageJson.version)
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'headers' },
      METADATA_AUTHORIZED_KEY,
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);

  app.enableCors({
  origin: [process.env.FRONTEND_URL, 'http://localhost:5173', 'https://education-platform-web-app.vercel.app'].filter(Boolean),
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
  credentials: true,
});
  SwaggerModule.setup('api', app, document);

//  await app.listen(4000);
  await app.listen(process.env.PORT || 4000, '0.0.0.0');
}

bootstrap();
