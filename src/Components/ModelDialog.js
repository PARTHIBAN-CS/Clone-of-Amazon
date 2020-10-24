import React, { Component } from 'react';
import '../Pages/ModelDialog.css'


class ModelDialog extends Component {
    constructor(props) {
        super(props);
        
    }
   
    render() {
        return (
            <div style={{ display: (this.props.open) ? 'block' : 'none' }} className={`newmodal_dialog ${this.props.open ? 'open':''}`}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: ' calc(100% - 32px)', alignItems: 'center',marginTop:'32px',marginBottom:'32px',overflow:'hidden' }}>
                    {
                    <div style={{
                        borderBottom: '1px solid #D5D5D5',
                        // minHeight: 50,
                        backgroundColor: 'white',
                        width: this.props.width == undefined ? '80%' : this.props.width,
                        paddingLeft: this.props.paddingLeft == undefined ? 60 : this.props.paddingLeft,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius:5,
                        zIndex: 10,
                        display: 'flex',
                        alignItems:'center',
                        justifyContent: 'space-between'
                    }}>
                        <div className="model_title">{this.props.title}</div>
                        <div onClick={() => this.props.handleClose()}>
                          x
                        </div>

                    </div>
                        
                    }
                    <div style={{
                        display: 'block',
                        backgroundColor: '#fff',
                        width: this.props.width == undefined ? '80%' : this.props.width,
                        height: this.props.height ? this.props.height : null,
                        overflow: 'auto',
                        paddingLeft: 30,
                        paddingRight: 30,
                        paddingBottom:32,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    className="modal-body"
                    >
                        {this.props.children}
                    </div>

                </div>
            </div>
        )
    }
}

export default ModelDialog;
