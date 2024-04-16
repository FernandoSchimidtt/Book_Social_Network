package com.fernandoschimidt.booknetwork.book;

import com.fernandoschimidt.booknetwork.common.BaseEntity;
import com.fernandoschimidt.booknetwork.feedback.Feedback;
import com.fernandoschimidt.booknetwork.history.BookTransactionHistory;
import com.fernandoschimidt.booknetwork.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Book extends BaseEntity {

    private String title;

    private String authorName;
    private String isbn;
    private String synopsis;
    private String bookCover;
    private boolean archived;
    private boolean shareable;

    @ManyToOne //muitos livros para um usuario
    @JoinColumn(name = "owner_id")
    private User owner;

    @OneToMany(mappedBy = "book")
    private List<Feedback> feedbacks; //muitos feedbacks para um livro

    @OneToMany(mappedBy = "book")
    private List<BookTransactionHistory> histories;

}
