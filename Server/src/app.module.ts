import { Module } from "@nestjs/common"
import { ServeStaticModule } from "@nestjs/serve-static"
import { join } from "path"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ClientsModule } from "./clients/clients.module"

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, "..", "..", "Client", "dist"),
			// rootPath: join(__dirname, "Public"),

			// serveRoot: "/static", // Serve under specific path
			serveStaticOptions: {
				index: false, // Disable directory listing
				maxAge: "1d", // Browser caching
				extensions: [
					"html",
					"js",
					"css",
					"png",
					"jpg",
					"jpeg",
					"gif",
					"ico",
				], // Restrict file types
				dotfiles: "deny", // Prevent serving dotfiles
				etag: true, // Enable ETags
			},
		}),
		ClientsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
