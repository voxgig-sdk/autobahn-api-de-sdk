<?php
declare(strict_types=1);

// AutobahnApiDe SDK utility: prepare_body

class AutobahnApiDePrepareBody
{
    public static function call(AutobahnApiDeContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
