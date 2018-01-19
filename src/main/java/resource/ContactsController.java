package resource;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactsController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/contacts", method=GET)
    public Contacts contacts(@RequestParam(value="name", defaultValue="World") String name) {
        return new Contacts(counter.incrementAndGet(),
                            String.format(template, name));
    }
}