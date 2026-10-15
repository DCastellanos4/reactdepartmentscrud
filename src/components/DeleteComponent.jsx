import React, { Component } from "react";

export default class DeleteComponent extends Component {
  confirmDelete = () => {
    this.props.deleteDepart(this.props.numero);
    this.props.unloadModal();
  };
  unDelete = () => {
    this.props.unloadModal();
  };
  render() {
    if (this.props.numero) {
      return (
        <div
          className="modal d-block delete-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-modal-title"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content delete-modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="delete-modal-title">
                  Confirmar eliminación
                </h5>
              </div>

              <div className="modal-body">
                ¿Seguro que quieres eliminar el departamento {this.props.numero}
                ?
              </div>

              <div className="modal-footer">
                <button
                  onClick={() => {
                    this.confirmDelete();
                  }}
                  className="btn btn-success"
                >
                  Si
                </button>
                <button onClick={this.unDelete} className="btn btn-danger">
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
