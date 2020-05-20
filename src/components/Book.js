import React from 'react';
import * as CONFIG from '../utils/Constant';

function bookList() {
    return (
        CONFIG.books.map(function(value,index){
            return (
            <a href="#" class="related-artist">
            <span key={index} class="related-artist__name">{value}</span>
            </a>)
        })
        
    );
}

export default function Book() {
    
    return (
        <div class="overview__related">

                <div class="section-title">Favorite Books</div>
                <div class="related-artists">
                {bookList()}
                </div>
              </div>
    );
}