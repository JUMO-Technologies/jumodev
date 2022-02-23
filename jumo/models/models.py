# -*- coding: utf-8 -*-

from odoo import models, fields, api
from odoo.tools import misc
import logging
_logger = logging.getLogger(__name__)

class application(models.Model):
    _name = 'jumo.application'
    name = fields.Char(string='Content')