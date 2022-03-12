odoo.define('document_attachment_manage', function (require) {
"use strict";

    require('document_sidebar');
    const ActionMenus = require('web.ActionMenus');
    const utils = require('web.utils');
    const { _t } = require('web.core');

    utils.patch(ActionMenus.prototype, 'document_attachment_manage', {
        async _setFileItems(props) {
            let fileItems = await this._super(props);
            if (this.access) {
                fileItems.push({
                    key: 'filemanage',
                    groupNumber: 'filemanage',
                    description: _t('Manage Attachments File'),
                    icon: 'fa-file',
                    callback: this._onFileManage.bind(this)
                });
            }
            return fileItems;
        },
        _onFileManage() {
            const res_ids = this.props.activeIds;
            const res_id = res_ids[0];
            const res_model = this.env.action.res_model;
            this.trigger('do-action', {
                action: {
                    type: 'ir.actions.act_window',
                    name: _t('Manage Attachments File'),
                    views: [[false, 'list'], [false, 'form']],
                    res_model: 'ir.attachment',
                    domain: [['res_model', '=', res_model], ['res_id', 'in', res_ids]],
                    context: {
                        default_res_model: res_model,
                        default_res_id: res_id,
                    },
                },
            });
        },
    });

});