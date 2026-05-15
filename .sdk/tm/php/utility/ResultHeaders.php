<?php
declare(strict_types=1);

// AutobahnApiDe SDK utility: result_headers

class AutobahnApiDeResultHeaders
{
    public static function call(AutobahnApiDeContext $ctx): ?AutobahnApiDeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
