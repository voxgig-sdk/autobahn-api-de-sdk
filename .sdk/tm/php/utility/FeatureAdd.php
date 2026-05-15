<?php
declare(strict_types=1);

// AutobahnApiDe SDK utility: feature_add

class AutobahnApiDeFeatureAdd
{
    public static function call(AutobahnApiDeContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
