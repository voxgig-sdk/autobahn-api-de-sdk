<?php
declare(strict_types=1);

// AutobahnApiDe SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class AutobahnApiDeMakeContext
{
    public static function call(array $ctxmap, ?AutobahnApiDeContext $basectx): AutobahnApiDeContext
    {
        return new AutobahnApiDeContext($ctxmap, $basectx);
    }
}
