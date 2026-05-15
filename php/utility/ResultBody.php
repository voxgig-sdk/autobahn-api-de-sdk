<?php
declare(strict_types=1);

// AutobahnApiDe SDK utility: result_body

class AutobahnApiDeResultBody
{
    public static function call(AutobahnApiDeContext $ctx): ?AutobahnApiDeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
