import React, { Component } from 'react'

export class Mod extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" ariaLabelledby="myModalLabel"
            ariaHidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <button type="button" class="close"
                            data-dismiss="modal" aria-hidden="true">
                            &times;
                        </button>
                            <h4 class="modal-title" id="myModalLabel">{this.props.item}</h4>
                        </div>
                        <div className="modal-body">
                        {this.props.item}
                        </div>
                        <div className="modal-footer">
                        <button type="button" class="btn btn-default"
                        data-dismiss="modal">Close
                        </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Mod
