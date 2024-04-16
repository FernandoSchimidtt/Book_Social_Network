package com.fernandoschimidt.booknetwork.feedback;

import com.fernandoschimidt.booknetwork.book.Book;
import com.fernandoschimidt.booknetwork.common.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Feedback extends BaseEntity {

    private Double note;  //1--5 stars
    private String comment;

    @ManyToOne
    @JoinColumn(name = "book_id") //muitos feedback para um livro
    private Book book;

}
