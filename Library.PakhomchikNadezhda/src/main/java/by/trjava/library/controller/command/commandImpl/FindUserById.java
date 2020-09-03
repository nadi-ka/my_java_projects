package by.trjava.library.controller.command.commandImpl;

import by.trjava.library.bean.user.User;
import by.trjava.library.controller.command.Command;
import by.trjava.library.controller.parser.Parser;
import by.trjava.library.service.exceptionService.ServiceException;
import by.trjava.library.service.serviceFactory.ServiceFactory;
import by.trjava.library.service.serviceFactory.serviceFactoryImpl.ServiceFactoryImpl;
import by.trjava.library.service.userService.UserService;

public class FindUserById implements Command {

    @Override
    public String execute(String request) {
        String userToFindId = Parser.getParameterValue(request, "id");
        String userWhoPerformLogin = Parser.getParameterValue(request, "login");
        String userWhoPerformPassword = Parser.getParameterValue(request, "password");
        User userToFind;
        User userWhoPerform;
        String response;

        ServiceFactory factory =  ServiceFactoryImpl.getInstance();
        UserService userService = factory.getUserService();
        try {
            userWhoPerform = userService.SignIn(userWhoPerformLogin, userWhoPerformPassword);
            userToFind = userService.findUserById(userToFindId, userWhoPerform);
            response = "The user was found successfully. " + "The user's login: " + userToFind.getLogin();
        }
        catch (ServiceException ex) {
            response = "Error during the operation. The user wasn't found.";
        }
        return response;
    }
}
