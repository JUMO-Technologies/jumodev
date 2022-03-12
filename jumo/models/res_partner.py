# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from datetime import datetime

from odoo import api, fields, models


class Partner(models.Model):
    _name = 'res.partner'
    _inherit = 'res.partner'

    def show_calls(self):
        self.ensure_one()
        action = self.env["ir.actions.actions"]._for_xml_id("jumo.action_jumo")
        action['context'] = {
            'partner_id': self.id,
        }
        return action
