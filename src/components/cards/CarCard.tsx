import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Car } from "@/data/cars";

interface Props { car: Car }

const CarCard = ({ car }: Props) => {
  if (!car || !car.slug) {
    return null;
  }

  return (
    <Link href={`/cars/${car.slug}`} aria-label={`View ${car.brand} ${car.model} ${car.year}`} className="group">
      <Card className="surface overflow-hidden hover-scale transition-shadow">
        <CardContent className="p-0">
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img
              src={car.images}
              alt={`${car.brand} ${car.model} ${car.year} — luxury rental car in catalog`}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="p-5 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium leading-snug min-h-[2.75rem] clamp-2">{car.brand} {car.model}</h3>
              <p className="text-sm text-muted-foreground">{car.year} • {car.stockStatus}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">from</div>
              <div className="font-semibold">${car.pricePerDay}/day</div>
            </div>
          </div>
          <div className="px-5 pb-5">
            <Button variant="hero" size="sm">View Details</Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CarCard;
