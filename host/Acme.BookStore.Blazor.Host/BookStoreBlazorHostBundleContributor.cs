﻿using Volo.Abp.Bundling;

namespace Acme.BookStore.Blazor.Host;

public class BookStoreBlazorHostBundleContributor : IBundleContributor
{
    public void AddScripts(BundleContext context)
    {

    }

    public void AddStyles(BundleContext context)
    {
        context.Add("main.css", true);
    }
}
