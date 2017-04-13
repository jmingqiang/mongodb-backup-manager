import React, { Component } from 'react';

const colorsMap = {
    'PENDING': '#fff23f',
    'WAITING': '#2a9ced',
    'RUNNING': '#4cd139',
    'ABORTED': '#1e1f21',
    'STOP': '#ed281a'
};

export default class BackupGrid extends Component {

    render() {
        const { backupConfig } = this.props;

        return (
            <div className="backup-grid-wrapper">
                <div className="backup-grid">
                    <div className="status-wrapper">
                        <div className="status-ball" style={ { borderColor: colorsMap[backupConfig.status], color: colorsMap[backupConfig.status] } }></div>
                        <div className="status">{ backupConfig.status }</div>
                    </div>
                    <div className="item">
                        <div className="key">server</div>
                        <div className="value server-value">{ backupConfig.server }</div>
                    </div>
                    <div className="item">
                        <div className="key">backup database</div>
                        <div className="value db-value">{ backupConfig.db }</div>
                    </div>
                    <div className="item">
                        <div className="key">last backup time</div>
                        <div className="value time-value">{ backupConfig.lastBackupTime || "N/A" }</div>
                    </div>
                    <div className="item">
                        <div className="key">last backup status</div>
                        <div className="value backup-status">{  backupConfig.lastBackupStatus || "N/A" }</div>
                    </div>
                    <div className="item">
                        <div className="key">next backup time</div>
                        <div className="value time-value">{ backupConfig.nextBackUpTime || ""}</div>
                    </div>
                </div>
            </div>
        )
    }

};