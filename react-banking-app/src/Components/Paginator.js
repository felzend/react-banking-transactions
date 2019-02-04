import React, { Component } from 'react'

export default class Paginator extends Component {
    render() {
        return (
            <div className="paginator">
                <div className="form-group">
                    <label htmlFor="page">Página</label>
                    <select className="form-control" name="page" onChange={this.props.handlePageChange}>
                    {this.props.transactions.pages.map(page =>
                        <option key={page} value={page} selected={page === this.props.transactions.currentPage}>{page}</option>
                    )}
                    </select>
                </div>                
            </div>
        )
    }
}