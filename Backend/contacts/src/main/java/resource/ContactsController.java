package resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/contacts/")
public class ContactsController {

    @RequestMapping(value = "{/id}", method = RequestMethod.GET)
    String get() {
        return "Lofasz";
    }

    @RequestMapping(method = RequestMethod.DELETE)
    String delete() {
        return "Hello from delete";
    }

    @RequestMapping(method = RequestMethod.POST)
    String post() {
        return "Hello from post";
    }

    @RequestMapping(method = RequestMethod.PUT)
    String put() {
        return "Hello from put";
    }

    @RequestMapping(method = RequestMethod.PATCH)
    String patch() {
        return "Hello from patch";
    }
}