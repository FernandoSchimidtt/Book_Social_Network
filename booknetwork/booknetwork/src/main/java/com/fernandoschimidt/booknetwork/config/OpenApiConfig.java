package com.fernandoschimidt.booknetwork.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                contact = @Contact(
                        name = "Fernando",
                        email = "fernandoschimidt@outlook.com",
                        url = "http://fernandoschimidt.com.br"
                ),
                description = "OpenApi documentation for Spring security",
                title = "OpenApi specification - Fernando",
                version = "1.0",
                license = @License(
                        name = "License name",
                        url = "http://"
                ),
                termsOfService = "Terms of service"
        ),
        servers = {
                @Server(
                        description = "Local EVN",
                        url = "http://localhost:8088/api/v1"
                ),
                @Server(
                        description = "PROD EVN",
                        url = "http://"
                )
        },
        security = {
                @SecurityRequirement(
                        name = "bearerAuth"
                )
        }
)
@SecurityScheme(
        name = "bearerAuth",
        description = "JWT auth description",
        scheme = "bearer",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        in = SecuritySchemeIn.HEADER
)
public class OpenApiConfig {
}
