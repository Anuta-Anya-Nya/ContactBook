package com.anna.contactapp.config;

import com.anna.contactapp.entity.Contact;
import com.anna.contactapp.env.SettingsApp;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
@Configuration //чтобы springframework понимал что это конфигурации
public class CorsConfig implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
    config.exposeIdsFor(Contact.class); //получать id из contacts
    cors.addMapping(config.getBasePath()+ "/**")
            .allowedOrigins(SettingsApp.getHOST()) //с какого url можно к нам обращаться
            .allowedMethods("GET", "POST", "delete") //какими http методами можно польоваться
            .allowCredentials(true); //можно передавать куки в авторицации через core запросы
    }
}
