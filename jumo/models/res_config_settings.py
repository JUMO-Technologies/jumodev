# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models

class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    jumo_ringover_token = fields.Char(string='API token for Ringover', config_parameter='jumo.jumo_ringover_token')
    jumo_ringover_endpoint = fields.Char(string='API endpoint for Ringover', config_parameter='jumo.ringover_endpoint', default='https://public-api.ringover.com/v2/calls')

    # @api.model
    # def get_values(self):
    #     res = super(ResConfigSettings, self).get_values()
    #     test_config = self.env.ref('jumo_ringover_token', False)
    #     test_config and res.update(
    #         jumo_ringover_token=test_config.jumo_ringover_token,
    #     )
    #     return res

    # def set_values(self):
    #     super(ResConfigSettings, self).set_values()
    #     test_config = self.env.ref('jumo_ringover_token', False)
    #     test_config and test_config.write({
    #         'jumo_ringover_token': self.jumo_ringover_token,
    #     })