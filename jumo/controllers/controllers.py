# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request
import json

class Jumo(http.Controller):
    @http.route('/jumo/test/', auth='public')
    def index(self, **kw):
        context = {
            'session_info': json.dumps(request.env['ir.http'].session_info())
        }
        return request.render('jumo.index', qcontext=context)
