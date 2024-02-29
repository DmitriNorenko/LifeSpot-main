using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using System.IO;

namespace LifeSpot.Views
{
    public static class EndpointMapper
    {

        public static void MapCss(this IEndpointRouteBuilder builder)
        {
            var cssFiles = new[] { "index.css" };

            foreach (var fileName in cssFiles)
            {
                builder.MapGet($"/Static/CSS/{fileName}", async context =>
                {
                    var cssPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "CSS", fileName);
                    var css = await File.ReadAllTextAsync(cssPath);
                    await context.Response.WriteAsync(css);
                });
            }
        }
    }
}
