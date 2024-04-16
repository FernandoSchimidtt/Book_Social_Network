package com.fernandoschimidt.booknetwork.book;

import com.fernandoschimidt.booknetwork.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookMapper bookMapper;
    private final BookRepository bookRepository;

    public Integer save(BookRequest request, Authentication connectedUSer) {
        User user = ((User) connectedUSer.getPrincipal());
        Book book = bookMapper.toBook(request);
        book.setOwner(user);

        return bookRepository.save(book).getId();
    }
}
