import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';



class BookItem extends Component {
    onPressed() {
        const { book, selected } = this.props;
        selected ? this.props.deselectBook() : this.props.selectBook(book);
    }
    render() {
        const { book, selected } = this.props;
        const des = selected ? (
            <Text style={styles.desStyle}>{book.description}</Text>
        ) : null;

        return (
            <TouchableOpacity onPress={this.onPressed.bind(this)}>
                <Card>
                    <Text style={styles.titleStyle}>{book.title}</Text>
                    <Text style={styles.authorStyle}>{book.author}</Text>
                </Card>
                {des}
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 16,
        color: 'black'
    },
    authorStyle: {
        fontSize: 13,
        color: 'gray'
    },
    desStyle: {
        fontSize: 11,
        color: 'purple',
        marginLeft: 20,
        marginRight: 10
    }
});

const mapStateToProps = (state, props) => {
    const selected = state.selectedBook && state.selectedBook.isbn === props.book.isbn;
    return {
        selected
    }
}
export default connect(mapStateToProps, actions)(BookItem);