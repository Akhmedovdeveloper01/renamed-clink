import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { magneticButtonBaseClass } from "@/lib/button-styles";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="container-px mx-auto flex max-w-2xl flex-col items-center py-32 text-center">
      <p className="font-serif text-7xl font-semibold text-brand">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-foreground">
        {t("title")}
      </h1>
      <p className="mt-3 text-base text-foreground-muted">
        {t("description")}
      </p>
      <Link href="/" className={magneticButtonBaseClass("primary") + " mt-8"}>
        {t("backHome")}
      </Link>
    </div>
  );
}
